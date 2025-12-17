-- ============================================================================
-- Strapi v5 PostgreSQL Setup
-- Creates extensions and sets permissions
-- ============================================================================

-- Required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Permissions
GRANT ALL PRIVILEGES ON DATABASE acumen_blog TO strapi_user;
GRANT ALL ON SCHEMA public TO strapi_user;

-- Performance indexes (created after Strapi migration)
DO $$
BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE tablename = 'articles') THEN
        CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
        CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at);
        CREATE INDEX IF NOT EXISTS idx_articles_featured ON articles(featured);
        RAISE NOTICE 'Indexes created';
    END IF;
END $$;
