require 'jekyll-spark'

module Jekyll
  class Avatar < ComponentTag
    def template(context)
      className = @props['class']
      size = @props['size']

      componentClassName = [
        'c-Avatar',
        'u-centralize',
        size && %Q[is-#{size}],
        className
      ].join(' ')

      render = %Q[
        <div class='#{componentClassName}'>
          <img class='c-Avatar__image' src='/images/q-logo.png' />
        </div>
      ]
    end
  end
end

Liquid::Template.register_tag(
  'Avatar',
  Jekyll::Avatar,
)
