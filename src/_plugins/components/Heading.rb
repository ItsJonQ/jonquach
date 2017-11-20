require 'jekyll-spark'

module Jekyll
  class Heading < ComponentBlock
    def template(context)
      className = @props['class']
      content = @props['content']
      muted = @props['muted']
      small = @props['small']

      componentClassName = [
        'c-Heading',
        muted && 'is-muted',
        small && 'is-small',
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
  'Heading',
  Jekyll::Heading,
)
