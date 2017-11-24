require 'jekyll-spark'

module Jekyll
  class Section < ComponentBlock
    def template(context)
      className = @props['class']
      content = @props['content']

      componentClassName = [
        'c-Section',
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
  'Section',
  Jekyll::Section,
)
