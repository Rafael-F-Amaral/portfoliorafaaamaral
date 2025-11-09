// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Caminhos corretos, baseados nas suas imagens:
import project from './schemaTypes/project' 
import post from './schemaTypes/post'       

export default defineConfig({
  name: 'default',
  title: 'autproject',

  projectId: 'bq4zaaoy', // SEU ID DO PROJETO
  dataset: 'production',   // SEU DATASET

  plugins: [structureTool()],

  schema: {
    // Adiciona os dois tipos de documento ao schema
    types: [project, post], 
  },
})