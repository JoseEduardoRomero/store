const path = require('path') //esto esta en los recursos de node, asi que cuando este lo jalara por default
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/index.js', //nos permite decir cual es nuestro punto de entrada del proyecto
  output: { //donde se compilara  y guradara
    path: path.resolve(__dirname, 'dist'), //path resolve nos permite saber en que carpeta estamos, apartir de ahi le decimos que creara la carpeta dist
    filename: 'bundle.js' //Nombre de como se llamara el archivo
  },
  resolve: { //Que extensiones estara escuchando, analizando paara preparar
    extensions: ['.js', '.jsx']
  },
  module: { //reglas para decirle como trabajar con ellos
    rules:[
      {
        test: /\.(js|jsx)$/, //esto es rgx, reglas para poder aplicar
        exclude: /node_modules/, //ignoramos node_modules
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', //Punto de entrada de lo que hara este recurso
      filename: './index.html' //asi se llarmara cuando preparemos todo y mande a produccion
    }),
    new MiniCssExtractPlugin({ //creamos la estancia para que se pueda trabajar con css
      filename: 'assets/[name].css' //nombre para el archivo.
    })
  ],
  devServer: { //Trabajar en modo desarrollo para poder ver cambios en el navegador
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005,
    open: true
  }
}