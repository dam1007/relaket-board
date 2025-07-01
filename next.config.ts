import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ['knex'], // 외부 패키지 추가
};

export default withVanillaExtract(nextConfig);
