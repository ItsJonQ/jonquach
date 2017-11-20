require 'jekyll-spark'

module Jekyll
  class CopyContainer < ComponentBlock
    def template(context)
      className = @props['class']
      content = @props['content']

      componentClassName = [
        'c-CopyContainer',
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
  'CopyContainer',
  Jekyll::CopyContainer,
)
