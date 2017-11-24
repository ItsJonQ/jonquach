require 'jekyll-spark'

module Jekyll
  class PostComponent < ComponentTag
    def template(context)
      className = @props['class']
      category = @props['category']
      excerpt = @props['excerpt']
      featured = @props['featured']
      link = @props['link']
      title = @props['title']

      componentClassName = [
        'c-Post',
        className
      ].join(' ')

      titleClassName = [
        'c-Post__title',
        'u-mrg-b-4',
        featured ? 'tx-h1' : 'tx-h3'
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
          <h2 class='#{titleClassName}'>
            {% Link href: '#{link}', subtle: true %}
              #{title}
            {% endLink %}
          </h2>
          <p class='c-Post__excerpt'>
            {% Text size: '#{featured ? 'lead' : ''}' %}
              #{excerpt}
            {% endText %}
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
