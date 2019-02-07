# cors-blimey
Serverless CORS with cookie credentials.

## Predicament

Un-[safe](https://developer.mozilla.org/en-US/docs/Glossary/Safe) methods will
cause a preflight for requests with a `Content-Type` of `application/json`.
Therefore, an `OPTIONS` method must be added to relevant resources within AWS
API Gateway, with the following header mappings in its 'Integration Response':

```
Access-Control-Allow-Origin: 'https://pedantic-brown-b023ed.netlify.com'
Access-Control-Allow-Credentials: 'true'
```

Support currently only via AWS Console.

## Architect proposal

```
@cors
https://pedantic-brown-b023ed.netlify.com
```

### Footnotes

* Support added to SAM in awslabs/serverless-application-model#464 (currently @ `develop`).
