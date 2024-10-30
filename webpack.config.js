import path from 'node:path';

export default {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        type: 'json',
        exclude: /node_modules/
      },
      {
        test: /\.gbnf$/i,
        use: 'raw-loader',
      },
    ]
  },

  target: 'node',
  resolve: {
    extensions: ['.ts', '.js'],
    extensionAlias: {
      '.js': ['.ts', '.js']
    }
  },
  devtool: 'source-map',
  output: {
    filename: 'main.cjs',
    path: path.join(process.cwd(), 'dist')
  }
};
