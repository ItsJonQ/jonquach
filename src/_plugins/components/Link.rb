require 'jekyll-spark'

module Jekyll
  class LinkComponent < ComponentBlock
    def template(context)
      className = @props['class']
      content = @props['content']
      target = @props['target']
      href = @props['href']
      subtle = @props['subtle']

      componentClassName = [
        'c-Link',
        subtle && 'is-subtle',
        className
      ].join(' ')

      targetMarkup = target ? (
        %Q[target='#{target}']
      ) : ''

      render = %Q[
        <a class='#{componentClassName}' #{targetMarkup} href='#{href}'>
          #{content}
        </a>
      ]
    end
  end
end

Liquid::Template.register_tag(
  'Link',
  Jekyll::LinkComponent,
)
