import swaggerUi from 'swagger-ui-express';
import express from 'express';
import swaggerDocs from './swagger.json';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3000, () => 
    console.log(`server ready at http://localhost:3000`)
);
