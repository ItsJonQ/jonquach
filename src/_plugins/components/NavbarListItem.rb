require 'jekyll-spark'
require_relative './Link'

module Jekyll
  class NavbarListItem < ComponentBlock
    def template(context)
      active = @props['active']
      className = @props['class']
      href = @props['href']
      content = @props['content']

      componentClassName = [
        'c-NavbarListItem',
        'c-list__item',
        active && 'is-active',
        className
      ].join(' ')

      render = %Q[
        <div class='#{componentClassName}'>
          {% Link href: '#{href}', subtle: #{!active} %}
            #{content}
          {% endLink %}
        </div>
      ]
    end
  end
end

Liquid::Template.register_tag(
  'NavbarListItem',
  Jekyll::NavbarListItem,
)
