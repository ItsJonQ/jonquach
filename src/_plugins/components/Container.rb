require 'jekyll-spark'

module Jekyll
  class Container < ComponentBlock
    def template(context)
      className = @props['class']
      content = @props['content']

      componentClassName = [
        'o-container',
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
  'Container',
  Jekyll::Container,
)
