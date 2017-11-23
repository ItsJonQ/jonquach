require 'jekyll-spark'
require_relative './NavbarListItem'
require_relative './Text'

module Jekyll
  class NavbarList < ComponentTag
    def root_path?
      @page_url == "/" || @page_url == "/404/"
    end

    def sanitize_link(link)
      return if link[0] != "/"
      # Adds a backslash to the last character, if it's missing
      link = link[-1, 1] != "/" ? "#{link}/" : link
    end

    def set_active_class(nav)
      nav.collect { |item|
        item["link"] = sanitize_link(item["link"])
        item["active"] = item["link"] == @page_url
        item
      }

      return nav
    end

    def get_nav(site)
      nav = site.data['nav']
      nav = set_active_class(nav)
    end

    def template(context) 
      @page_url = @context["page"]["url"]
      @nav = get_nav(@site)

      className = @props['class']
      content = @props['content']

      componentClassName = [
        'c-NavbarList',
        'c-list',
        'c-list--inline',
        className
      ].join(' ')

      render = %Q[
        <div class='#{componentClassName}'>
          #{@nav.reduce('') {|template, item|
            active = item["active"]
            link = item["link"]
            title = item["title"]

            template + %Q[
              {% NavbarListItem
                active: #{active}
                class: 'u-mrg-r-2'
                href: '#{link}'
              %}
                {% Text size: 14, weight: 900 %}
                  #{title}.
                {% endText %}
              {% endNavbarListItem %}
            ]
          }}
        </div>
      ]
    end
  end
end

Liquid::Template.register_tag(
  'NavbarList',
  Jekyll::NavbarList,
)
