require 'jekyll-spark'

module Jekyll
  class Col < ComponentBlock
    def template(context)
      className = @props['class']
      content = @props['content']

      componentClassName = [
        'o-col',
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
  'Col',
  Jekyll::Col,
)
