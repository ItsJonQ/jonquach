require 'jekyll-spark'

module Jekyll
  class Text < ComponentBlock
    def template(context)
      className = @props['class']
      code = @props['code']
      content = @props['content']
      faint = @props['faint']
      muted = @props['muted']
      sans = @props['sans']
      serif = @props['serif']
      size = @props['size']
      subtle = @props['subtle']
      uppercase = @props['uppercase']
      weight = @props['weight']

      componentClassName = [
        'c-Text',
        code && 'is-code',
        faint && 'is-faint',
        muted && 'is-muted',
        sans && 'is-sans',
        serif && 'is-serif',
        size && %Q[is-#{size}],
        subtle && 'is-subtle',
        uppercase && 'is-uppercase',
        weight && %Q[is-#{weight}],
        className
      ].join(' ')

      render = %Q[
        <span class='#{componentClassName}'>
          #{content}
        </span>
      ]
    end
  end
end

Liquid::Template.register_tag(
  'Text',
  Jekyll::Text,
)
