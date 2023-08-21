## <ins>Sentara Launch Darkly Component </ins>

### About the component

The useLaunchDarkly hook is a custom React hook that provides a convenient way to interact with LaunchDarkly, a feature flag management platform. This hook simplifies the process of fetching and managing feature flag data from LaunchDarkly for your application.

Import the Component

```ts
import {useLaunchDarkly} from "./launchDarkly";
```

Call it when you use launchdarkly component.

```ts
useLaunchDarkly(payload, tokenId);
```

### Sample Response

```
{
  "loading":false,
  "apiData":[
      {
        "AccountDeletion": true,
        "AccountSettings": false,
        "AllowParentViewClaims": true,
        "Allowspouseviewclaims": true,
      }
  ]
}

```

### Properties

| Property | Type   | Description                                                                                                 |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| payload  | string | An string representing the data you want to send to LaunchDarkly for feature flag evaluation.               |
| tokenId  | string | A string representing your LaunchDarkly token ID, allowing authentication and access to your feature flags. |

---

# <ins>Component Specifications</ins>

Following specifications are useful to the developer who are going to work in this component.

### Use Cases

- The component should accept the props mentioned above
- The component should return flags with key value pairs

### Interface for the props

```ts
interface useLaunchDarkly {
  payload: string;
  tokenId: string;
}
```

### Unit Test Cases

- Check is it rendering successfully.
