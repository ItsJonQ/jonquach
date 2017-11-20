require 'jekyll-spark'

module Jekyll
  class FlexyItem < ComponentBlock
    def template(context)
      className = @props['class']
      content = @props['content']

      componentClassName = [
        'o-flexy__item',
        className
      ].join(' ')

      render = %Q[
        <div class='#{componentClassName}'>
          #{content}
        </div>
      ]
    end
  end
end

Liquid::Template.register_tag(
  'FlexyItem',
  Jekyll::FlexyItem,
)
