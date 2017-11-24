require 'jekyll-spark'

module Jekyll
  class FlexyBlock < ComponentBlock
    def template(context)
      className = @props['class']
      content = @props['content']

      componentClassName = [
        'o-flexy__block',
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
  'FlexyBlock',
  Jekyll::FlexyBlock,
)
