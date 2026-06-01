import swaggerJSDoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecommerce API - Backend 3',
      version: '1.0.0',
      description: 'Documentacion de la API de nuestro ecommerce'
    },
    servers: [
      {
        url: 'https://api-products-coder.onrender.com/',
        description: 'Servidor en Render'
      }
    ],

    components: {
      schemas: {

        Product: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: 'p1'
            },
            title: {
              type: 'string',
              example: 'Mouse gamer'
            },
            price: {
              type: 'number',
              example: 100
            },
            stock: {
              type: 'number',
              example: 5
            },
            image: {
              type: 'string',
              example: '/img/mi-imagen.jpg'
            },
            category: {
              type: 'string',
              example: 'mouse'
            }
          }
        },

        ProductsResponse: {
          type: 'object',
          properties: {
            status: {
              type: 'string',
              example: 'success'
            },
            message: {
              type: 'string',
              example: 'Product List'
            },
            payload: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Product'
              }
            }
          }
        },

        ProductResponse: {
          type: 'object',
          properties: {
            status: {
              type: 'string',
              example: 'success'
            },
            message: {
              type: 'string',
              example: 'Product List'
            },
            payload: {
              $ref: '#/components/schemas/Product'
            }
          }
        },

        ErrorResponse: {
          type: 'object',
          properties: {
            status: {
              type: 'string',
              example: 'error'
            },
            message: {
              type: 'string',
              example: 'Producto not found'
            }
          }
        },

        ProductInput: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              example: 'Teclado Mecanico'
            },
            price: {
              type: 'number',
              example: 150
            },
            stock: {
              type: 'number',
              example: 20
            },
            image: {
              type: 'string',
              example: '/img/mi-imagen.jpg'
            },
            category: {
              type: 'string',
              example: 'mouse'
            }
          },
          required: ['title', 'price', 'stock', 'image', 'category']
        }

      }
    },
    
  },
  apis: ['./src/routes/*.js']
});