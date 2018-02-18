require 'jekyll-spark'

module Jekyll
  class Navbar < ComponentBlock
    def template(context)
      className = @props['class']
      content = @props['content']
      size = @props['size']

      componentClassName = [
        'c-Navbar',
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
  'Navbar',
  Jekyll::Navbar,
)
