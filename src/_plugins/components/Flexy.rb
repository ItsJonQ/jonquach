require 'jekyll-spark'

module Jekyll
  class Flexy < ComponentBlock
    def template(context)
      className = @props['class']
      content = @props['content']
      gap = @props['gap']

      componentClassName = [
        'o-flexy',
        gap ? 'o-flexy--gap-sm' : %Q[o-flexy--gap-#{gap}],
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
  'Flexy',
  Jekyll::Flexy,
)
