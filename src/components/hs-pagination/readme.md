# hs-pagination



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type     | Default |
| ------------- | -------------- | ----------- | -------- | ------- |
| `currentPage` | `current-page` |             | `number` | `1`     |
| `totalPages`  | `total-pages`  |             | `number` | `5`     |


## Dependencies

### Depends on

- [hs-button](../hs-button)

### Graph
```mermaid
graph TD;
  hs-pagination --> hs-button
  hs-button --> hs-box
  hs-button --> hs-text
  hs-button --> hs-loading
  hs-loading --> hs-box
  style hs-pagination fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
