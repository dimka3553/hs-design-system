# hs-input



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description | Type                                                          | Default   |
| -------------- | -------------- | ----------- | ------------------------------------------------------------- | --------- |
| `helptext`     | `helptext`     |             | `string`                                                      | `''`      |
| `helptexttype` | `helptexttype` |             | `"error" \| "info"`                                           | `'info'`  |
| `itemid`       | `itemid`       |             | `string`                                                      | `''`      |
| `label`        | `label`        |             | `string`                                                      | `'Label'` |
| `name`         | `name`         |             | `string`                                                      | `''`      |
| `type`         | `type`         |             | `"checkbox" \| "password" \| "radio" \| "text" \| "textarea"` | `'text'`  |
| `value`        | `value`        |             | `string`                                                      | `''`      |


## Dependencies

### Used by

 - [hs-loginform](../hs-loginform)

### Depends on

- [hs-box](../hs-box)

### Graph
```mermaid
graph TD;
  hs-input --> hs-box
  hs-loginform --> hs-input
  style hs-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
