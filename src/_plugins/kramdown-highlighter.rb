require "kramdown"

module Kramdown
  class Converter::Html

    def _detect_language_filename(language)
      file_name = nil
      bare_language_regex = /\A\w+\z/

      unless language =~ bare_language_regex
        file_name = language

        language = _determine_language(language)
      end
      [language, file_name]
    end

    def _determine_language(language)
      case /\.(\w+)$/.match(language)[1]
      when 'json'
        ''
      when 'js'
        'javascript'
      when 'html'
        'html'
      when 'scss'
        'scss'
      when 'css'
        'css'
      end
    end

    def convert_codeblock(el, indent)
      attr = el.attr.dup
      lang = extract_code_language!(attr)
      highlighted_code = false
      file_name = false

      if lang
        lang, file_name = _detect_language_filename(lang)
      end

      hl_opts = {}

      if lang
        highlighted_code = highlight_code(el.value, lang || el.options[:lang], :block, hl_opts)
      end

      output = "#{' '*indent}"
      output_file = ""

      if file_name
        output_file = "<div class=\"highlight-header\"><pre>#{file_name}</pre></div>"
      end

      if highlighted_code
        add_syntax_highlighter_to_class_attr(attr, lang || hl_opts[:default_lang])
        output += "<div#{html_attributes(attr)}>#{output_file}<div class=\"c-clipboard-copy-container js-code-snippet\"><div class=\"highlighter-rouge__wrapper\">#{highlighted_code}#{' '*indent}</div></div></div>\n"
      else
        result = escape_html(el.value)
        result.chomp!
        if el.attr['class'].to_s =~ /\bshow-whitespaces\b/
          result.gsub!(/(?:(^[ \t]+)|([ \t]+$)|([ \t]+))/) do |m|
            suffix = ($1 ? '-l' : ($2 ? '-r' : ''))
            m.scan(/./).map do |c|
              case c
              when "\t" then "<span class=\"ws-tab#{suffix}\">\t</span>"
              when " " then "<span class=\"ws-space#{suffix}\">&#8901;</span>"
              end
            end.join('')
          end
        end
        code_attr = {}
        code_attr['class'] = "language-#{lang}" if lang
        output += "#{' '*indent}<div class=\"highlighter-rouge #{html_attributes(attr)}\"><div class=\"highlight highlight--none\"><pre#{html_attributes(attr)}><code#{html_attributes(code_attr)}>#{result}\n</code></pre></div></div>\n"
      end
    end
  end
end
