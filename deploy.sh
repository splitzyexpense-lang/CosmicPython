#!/bin/bash

echo "🚀 Starting Astralux deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Create web directory if it doesn't exist
mkdir -p web

# Copy built files from dist/public to web/public
echo "📋 Copying files to web/public..."
rm -rf web/public
cp -r dist/public web/public

# Copy the Flutter app files
echo "📱 Copying Flutter app..."
cp -r r web/public/r

# Deploy to Firebase
echo "🔥 Deploying to Firebase..."
npx firebase deploy --token "$FIREBASE_TOKEN" --non-interactive

echo "✅ Deployment complete!"
