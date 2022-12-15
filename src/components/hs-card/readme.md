# hs-card



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type     | Default                                  |
| ----------- | ----------- | ----------- | -------- | ---------------------------------------- |
| `cardtitle` | `cardtitle` |             | `string` | `'Title goes here'`                      |
| `image`     | `image`     |             | `string` | `'https://thisartworkdoesnotexist.com/'` |
| `subtitle`  | `subtitle`  |             | `string` | `'Subtitle goes here'`                   |


## Dependencies

### Depends on

- [hs-avatar](../hs-avatar)
- [hs-header](../hs-header)

### Graph
```mermaid
graph TD;
  hs-card --> hs-avatar
  hs-card --> hs-header
  hs-header --> hs-text
  style hs-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
