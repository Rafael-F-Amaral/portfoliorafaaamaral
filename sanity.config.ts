// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import project from './schemas/project' // Importa o arquivo que você criou
import post from './schemas/post'       // Importa o arquivo que você criou

export default defineConfig({
  name: 'default',
  title: 'autproject', // Você pode mudar isso se quiser

  projectId: 'bq4zaaoy', // SEU ID DO PROJETO
  dataset: 'production',   // SEU DATASET

  plugins: [structureTool()],

  schema: {
    // Adiciona os dois tipos de documento ao schema
    types: [project, post], 
  },
})