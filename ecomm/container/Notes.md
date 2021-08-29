# NOTES

| Role   | Purpose of MF | name      | Port(localhost:80xx) | remotes                                         | exposes         | import of bootstrap.js   |
| ------ | ------------- | --------- | -------------------- | ----------------------------------------------- | --------------- | ------------------------ |
| Remote | Product List  | products  | 8081                 |                                                 | ./ProductsIndex | N/A                      |
| Remote | Cart          | cart      | 8082                 |                                                 | ./CartShow      | N/A                      |
| Host   | Container     | container | 8080                 | 'products@http://localhost:8081/remoteEntry.js' | N/A             | 'products/ProductsIndex' |
|        |               |           |                      | 'cart@http://localhost:8082/remoteEntry.js'     | N/A             | 'cart/CartShow'          |

- _container_ is Host.

## ModuleFederationPlugin

- Remote:
  - 'name' in is important.
  - 'filename' can be anything, but usually it should be 'remoteEntry.js'
- Host: key-value pair inside remotes object
  - the key must match 'name' of the remote.
  - the value consists of 'name', 'port', and 'filename' from Remote
    - format is like this: "_'name'_@http://localhost:_'port'_/_'filename'_"

## bootstrap.js in Host(container)

- It is used to pick remote js files.
- It is imported in index.js as `import('./bootstrap')`
- here import format for Remotes is `import 'A/B';`, where
  - A and B are keys (key-value pair), taken from ModuleFederationPlugin of _Host_(container) and _Remote_(products, cart, etc.), respectively.
    - A (from Host): ModuleFederationPlugin -> remotes (e.g. products, productsApp, cart, cartApp, etc.)
    - B (from Remote): ModuleFederationPlugin -> exposes (e.g. './ProductsIndex','./CartShow')(take only ProductsIndex, CartShow, etc.)
- instead of importing everything from remote as `import 'products/src/index'`, we created a key(in _Remote_), to 'src/index' as
  - `'./ProdustsIndex': './src/index'`
