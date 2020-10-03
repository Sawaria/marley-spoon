require 'contentful'

module ApiClients
  class ContentfulClient
    DEFAULT_ACCESS_TOKEN = "7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c"
    DEFAULT_SPACE_ID = "kk2bw5ojx476"
    DEFAULT_ENV_ID = "master"
    DEFAULT_TIMEOUT_IN_SECONDS = 3

    def initialize(options: {})
      @options = options
    end

    def all
      conn.entries(options)
    end

    def find(id:)
      conn.entry(id, options)
    end

    private

    attr_reader :options

    def conn
      Contentful::Client.new(
        access_token: ENV.fetch('ACCESS_TOKEN', DEFAULT_ACCESS_TOKEN),
        space: ENV.fetch('SPACE_ID', 'kk2bw5ojx476'),
        environment: ENV.fetch('ENVIRONMENT_ID', 'master'),
        timeout_read: DEFAULT_TIMEOUT_IN_SECONDS,
        timeout_connect: DEFAULT_TIMEOUT_IN_SECONDS,
        timeout_write: DEFAULT_TIMEOUT_IN_SECONDS
      )
    end
  end
end
