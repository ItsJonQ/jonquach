require 'jekyll-spark'

module Jekyll
  class BackgroundLines < ComponentTag
    def template(context)
      lineCount = 20
      linesMarkup = Array
        .new(lineCount)
        .each_with_index
        .reduce('') {|markup, i|
          index = i[1]
          opacity = ((lineCount - (index * 2)).to_f / lineCount)
          markup << %Q[
            <div
              class='c-BackgroundLines__line is-#{index}'
              style='opacity: #{opacity};'
            ></div>
          ]
        }

      render = %Q[
        <div class='c-BackgroundLines'>
          #{linesMarkup}
        </div>
      ]
    end
  end
end

Liquid::Template.register_tag(
  'BackgroundLines',
  Jekyll::BackgroundLines,
)
