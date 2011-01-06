# Rakefile for jquery plugin gen        -*- ruby -*-
require 'rubygems' unless ENV['NO_RUBYGEMS']

require 'jquery_plugin_gen/tasks'

JQUERY_PLUGIN  = 'j6'
PLUGIN_VERSION = '0.0.1'

# Load your custom tasks from tasks folder
Dir.glob("tasks/*.rake").each{ |t| import t rescue nil }

# Alternatively, create any new tasks here
# task :default => [:task, :dependencies] do
#   yours
# end