require 'digest/md5'

module Jekyll
  module Cachebuster
    def cachebuster(asset)
      # Digest::MD5.hexdigest input.downcase.strip
      _time = Time.now.to_i
      _hash = asset.strip + _time.to_s.strip
      _hash = Digest::MD5.hexdigest _hash 
      _asset = asset + "?v=" + _hash

      # Example:
      # awesome.css?v=8e070d991ecba11dc3dd98668b20220d
      _asset

    end
  end
end

Liquid::Template.register_filter(Jekyll::Cachebuster)
