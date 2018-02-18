require 'jekyll-spark'

module Jekyll
  class Heading < ComponentBlock
    def template(context)
      className = @props['class']
      content = @props['content']
      em = @props['em']
      muted = @props['muted']
      size = @props['size']
      small = @props['small']
      weight = @props['weight']

      componentClassName = [
        'c-Heading',
        muted && 'is-muted',
        small && 'is-small',
        size && %Q[is-#{size}],
        weight && %Q[is-#{weight}],
        className
      ].join(' ')

      contentMarkup = em ? (
        %Q[
          <em>#{content}</em>
        ]
      ) : content

      render = %Q[
        <div class='#{componentClassName}'>
          #{contentMarkup}
        </div>
      ]
    end
  end
end

Liquid::Template.register_tag(
  'Heading',
  Jekyll::Heading,
)
