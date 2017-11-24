require 'jekyll-spark'

module Jekyll
  class CopyContainer < ComponentBlock
    def template(context)
      className = @props['class']
      dropCap = @props['dropCap']
      content = @props['content']

      componentClassName = [
        'c-CopyContainer',
        dropCap && 'has-dropCap',
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
