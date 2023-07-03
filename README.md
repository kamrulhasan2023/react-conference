# NextJs Template (Sanity Version)

This is a Next.Js template codebase built with the `app` directory. Please familarize yourself with the inner workings of the `app` directory before moving forward.

This template should be used with a sanity backed that is created using the [sanity starter template](https://github.com/lemon-hive/sanity-starter). It contains helpful components for both backend and frontend, that will help jumpstart the

> NextJs `app directory` encodes urls returned from `getStaticParams`, this can lead to double encoding as our sanity codebase is configured to encode page urls. **So we have decode the data retrieved from sanity** before returning it from the `getStaticParams` method.

There will be a list of current issues/todos at the bottom of this readme.

## Caution

Before deleting the files in this template, it is important to go through the guidelines. This template was created with reusable components that will most like exist in every project. Only delete if you are sure that the component will NOT be used.

You might want to remove these packages and files if you don't need a `code` component.

- react-refractor
- refractor
- /styles/code-component-styles

# Guidelines

## Frontend development

This part is mainly for developers who will be building frontend components in this repository.

## Reusable components

Please use the following reusable components to make refactors easier. You can copy paste these names in the finder to locate them.

- `CustomLink`: All links in the project (both label links and component links) should use this component. It will allow us to maintain consitency for functionality and styling for links. (Enforce prefetch etc.)
- `CustomPortableText`: This component should be used when handling rich text. When defining the interface for **your component** use `ISanityCustomPortableText` as the type for the rich text field. If you need to get mock props for this type, you can ask the backend dev to generate some for you.

```typescript
// interface.ts for your component
interface MyComponent{
  ...,
  description: ISanityCustomPortableText
}
```

- `CustomImage | CustomFillImage`: These components accept certain props and return a NextJS image. If the image `src` fails then these components will render a fallback image. They also have a default `lqip` to render placeholder image. Ideally your components should call these image components to render images.

## Notes for using images

When defining an image for a component please consider the following:

- Should the image have a fixed height and width? If so, then please export the height and width of the component image as a `const` from the component's interface file.

  ```typescript
  // interface.ts for your component
  export const ExampleImageDimensions{
    height: 400,
    widht: 500
  }
  ```

- Should the image have one fixed dimension and another variable dimension? This is for situations where you have to maintain the aspect ratio of the image. If so then please, export only the fixed dimension from the interface file of the component. The component should also expect the variable dimension as a field.

  ```typescript
  // interface.ts for your component

  export interface MyComponent{
    width: number
  }

  export const ExampleImageDimensions{
    height: 400,
  }
  ```

- A component's image should always use the exported dimension values from the components interface file. For example lets say your component uses an image that has a fixed height.

  ```typescript
  //index.ts for your component
  import { ExampleImageDimensions } from './interface'
  ...,

  <CustomImage height={ ExampleImageDimensions.height } width={ 500 } />
  ```

## Backend Developers

This part is mainly for the developers who are working on the backend and integrating backend data with frontend components.

For startes this template uses the query language `groq`. You can practice groq with the `vision` tool in sanity dashboard. If you are not sure where to find it you can ask a fellow sanity dev.

This template contains some helper functions and query fragments to make development easier. It is important you go through the `src/backend` folder.

- `Images`: Sanity images are very powerful.

  - They allow the editor to have hotspots, crops for their images.
  - They allow to the developer to render such images easily. They also provide the developer with `lqip` versions of the image.

  There is a `generate-image` folder in `backend`.
  It contains 3 functions that help generate image objects according the frontend needs. Please go through the function description and use them appropriately.

- `Queries & Fragments`: Queries in groq can becom a little awkward. They are more versatile than graphql because you can query for everything or only the fields you need. But filtering and pagination can make a query quite unwieldly. This is something that you just have to practice and get better in. You can always ask a fellow sanity dev for help when you get stuck.

  Fragments are core part of writing sanity queries. There are a lot of reusable schemas in sanity. You can create fragments for those schemas to make writing queries a lot easier.There are some examples of the usage of fragments in the `/backend/queries/` folder

- `Types and Interfaces`: Unfortunately sanity does not yet have a stable codegen process. You will have to write the interfaces for sanity data manually. This will help you maintain typesafety as the project gets bigger. **This is a very important step please do not ignore it.** If you provide the interface for the shape of the data you are expecting, you will get code completion and type safety when handling the data before passing it to the frontend component.

## Todo

- Create a route to render general page.
- Create a more slim carousel.

## Issues

- The `draft` mode does not work. We have to keep an eye on Next.Js repo.
- `CustomPortableText` component throws an error while testing. The test still passes. The error is mainly to do with `react-refractor`. We should look into replacing it.
