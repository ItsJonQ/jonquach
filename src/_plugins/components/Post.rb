require 'jekyll-spark'

module Jekyll
  class PostComponent < ComponentTag
    def template(context)
      className = @props['class']
      category = @props['category']
      excerpt = @props['excerpt']
      link = @props['link']
      title = @props['title']

      componentClassName = [
        'c-Post',
        className
      ].join(' ')

      categoryMarkup = category ? (
        %Q[
          <div class='c-Post__category u-mrg-b-1'>
            {% Text muted: true, size: 13, uppercase: true %}
              #{category}
            {% endText %}
          </div>
        ]
      ) : ''

      render = %Q[
        <div class='#{componentClassName}'>
          #{categoryMarkup}
          <h2 class='c-Post__title tx-h3 u-mrg-b-4'>
            {% Link href: '#{link}', subtle: true %}
              #{title}
            {% endLink %}
          </h2>
          <p class='c-Post__excerpt'>
            #{excerpt}
          </p>
        </div>
      ]
    end
  end
end

Liquid::Template.register_tag(
  'Post',
  Jekyll::PostComponent,
)
