/* eslint-disable */

import * as sdk from "hypertune";

export const queryCode = `query FullQuery{root{aiType payedAI}}`;

export const query: sdk.Query<sdk.ObjectValueWithVariables> = {"variableDefinitions":{},"fragmentDefinitions":{},"fieldQuery":{"Query":{"type":"InlineFragment","objectTypeName":"Query","selection":{"root":{"fieldArguments":{"__isPartialObject__":true},"fieldQuery":{"Root":{"type":"InlineFragment","objectTypeName":"Root","selection":{"aiType":{"fieldArguments":{},"fieldQuery":null},"payedAI":{"fieldArguments":{},"fieldQuery":null}}}}}}}}};

export const vercelFlagDefinitions = {"aiType":{"options":[{"value":"liara","label":"Liara"},{"value":"gap_gpt","label":"Gap Gpt"},{"value":"open_router","label":"Open Router"}],"origin":"https://app.hypertune.com/projects/6465/main/draft/logic?selected_field_path=root%3EaiType"},"payedAI":{"options":[{"label":"Off","value":false},{"label":"On","value":true}],"origin":"https://app.hypertune.com/projects/6465/main/draft/logic?selected_field_path=root%3EpayedAI"}};

export type RootFlagValues = {
  "aiType": AIType;
  "payedAI": boolean;
}

export type FlagValues = {
  "aiType": AIType;
  "payedAI": boolean;
}

export type FlagPath = keyof FlagValues & string;

export const flagFallbacks: FlagValues = {
  "aiType": "liara",
  "payedAI": false,
}

export function decodeFlagValues<TFlagPath extends keyof FlagValues & string>(
  encodedFlagValues: string,
  flagPaths: TFlagPath[]
): Pick<FlagValues, TFlagPath> {
  return sdk.decodeFlagValues({ encodedFlagValues, flagPaths })
}

export type VariableValues = {};

export type User = {
  id: string;
  name: string;
  email: string;
}

export const EnvironmentEnumValues = [
  "development",
  "production",
  "test"
] as const;
export type Environment = typeof EnvironmentEnumValues[number];

/**
 * This `Context` input type is used for the `context` argument on your root field.
 * It contains details of the current `user` and `environment`.
 * 
 * You can define other custom input types with fields that are primitives, enums 
 * or other input types.
 */
export type Context = {
  user: User;
  environment: Environment;
}

export type RootArgs = {
  context: Context;
}

export type EmptyObject = {};

export const AITypeEnumValues = [
  "liara",
  "gap_gpt",
  "open_router"
] as const;
export type AIType = typeof AITypeEnumValues[number];

export class AITypeNode extends sdk.Node {
  override typeName = "AIType" as const;

  get({
    fallback,
    shouldReturnUnrecognizedValues = false,
   }: {
    fallback: AIType; 
    shouldReturnUnrecognizedValues?: boolean;
  }): AIType {
    const value = this.getValue({ fallback });

    if (typeof value !== "string" || !value) {
      this.logUnexpectedValueError(value);
      return fallback;
    }
    if (!shouldReturnUnrecognizedValues && !AITypeEnumValues.includes(value as AIType)) {
      this.logUnexpectedValueError(value);
      return fallback;
    }

    return value as AIType;
  }
}

export type Root = {
  aiType: AIType;
  payedAI: boolean;
}

const rootFallback = {aiType:"liara",payedAI:false};

export class RootNode extends sdk.Node {
  override typeName = "Root" as const;

  getRootArgs(): RootArgs {
    const { step } = this.props;
    return (step?.type === 'GetFieldStep' ? step.fieldArguments : {}) as RootArgs;
  }

  get({ fallback = rootFallback as Root}: { fallback?: Root } = {}): Root {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, ["Query", "root"]), 
      null,
    );
    return this.getValue({ query: getQuery, fallback }) as Root;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/6465/main/draft/logic?selected_field_path=root%3EaiType})
   */
  aiType({ args = {}, fallback, shouldReturnUnrecognizedValues = false }: { args?: EmptyObject; fallback: AIType; shouldReturnUnrecognizedValues?: boolean; }): AIType {
    const props0 = this.getFieldNodeProps("aiType", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      (expression0.type === "StringExpression" || 
        expression0.type === "EnumExpression") &&
      AITypeEnumValues.includes(expression0.value as AIType)
    ) {
      const node = new AITypeNode(props0);
      return node.get({ fallback, shouldReturnUnrecognizedValues });
    }

    const node = new AITypeNode(props0);
    node._logUnexpectedTypeError();
    return fallback;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/6465/main/draft/logic?selected_field_path=root%3EpayedAI})
   */
  payedAI({ args = {}, fallback }: { args?: EmptyObject; fallback: boolean; }): boolean {
    const props0 = this.getFieldNodeProps("payedAI", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "BooleanExpression"
    ) {
      const node = new sdk.BooleanNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.BooleanNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }
}

/**
 * This is your project schema expressed in GraphQL.
 * 
 * Define `Boolean` fields for feature flags, custom `enum` fields for flags with 
 * more than two states, `Int` fields for numeric flags like timeouts and limits, 
 * `String` fields to manage in-app copy, `Void` fields for analytics events, and 
 * fields with custom object and list types for more complex app configuration, 
 * e.g. to use Hypertune as a CMS.
 * 
 * Once you've changed your schema, set your flag logic in the Logic view.
 */
export type Source = {
  /**
   * You can add arguments to any field in your schema, which you can then use when
   * setting its logic, including the logic of any nested fields. Your root field 
   * already has a `context` argument. Since all flags are nested under the root 
   * field, this context will be available to all of them.
   */
  root: Root;
}

const sourceFallback = {root:{aiType:"liara",payedAI:false}};

export type GetQueryRootArgs = {
  args: RootArgs;
}

export type GetQueryArgs = {
  root: GetQueryRootArgs;
}

/**
 * This is your project schema expressed in GraphQL.
 * 
 * Define `Boolean` fields for feature flags, custom `enum` fields for flags with 
 * more than two states, `Int` fields for numeric flags like timeouts and limits, 
 * `String` fields to manage in-app copy, `Void` fields for analytics events, and 
 * fields with custom object and list types for more complex app configuration, 
 * e.g. to use Hypertune as a CMS.
 * 
 * Once you've changed your schema, set your flag logic in the Logic view.
 */
export class SourceNode extends sdk.Node {
  override typeName = "Query" as const;

  get({ args, fallback = sourceFallback as Source}: { args: GetQueryArgs; fallback?: Source }): Source {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, []), 
      args,
    );
    return this.getValue({ query: getQuery, fallback }) as Source;
  }

  /**
   * You can add arguments to any field in your schema, which you can then use when
   * setting its logic, including the logic of any nested fields. Your root field 
   * already has a `context` argument. Since all flags are nested under the root 
   * field, this context will be available to all of them.
   */
  root({ args }: { args: RootArgs; }): RootNode {
    const props0 = this.getFieldNodeProps("root", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "Root"
    ) {
      return new RootNode(props0);
    }

    const node = new RootNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }
}

export type DehydratedState = sdk.DehydratedState<Source, VariableValues>

const sources: { [key: string]: SourceNode } = {};

export type CreateSourceOptions = {
  token: string; 
  variableValues?: VariableValues;
  override?: sdk.DeepPartial<Source> | null;
  key?: string;
} & sdk.CreateOptions

export function createSource({
  token,
  variableValues = {},
  override,
  key,
  ...options
}: CreateSourceOptions): SourceNode {
  const sourceKey =
    key ?? (typeof window === "undefined" ? "server" : "client");

  if (!sources[sourceKey]) {
    sources[sourceKey] = sdk.create({
      NodeConstructor: SourceNode,
      token,
      variableValues,
      override,
      options,
    });
  }

  return sources[sourceKey];
}

export const emptySource = new SourceNode({
  context: null,
  logger: null,
  parent: null,
  step: null,
  expression: null,
  initDataHash: null,
});

export function createSourceForServerOnly({
  token,
  variableValues = {},
  override,
  key,
  ...options
}: CreateSourceOptions): SourceNode {
  return typeof window === "undefined"
    ? createSource({ token, variableValues, override, ...options })
    : emptySource;
}

export const overrideCookieName = "hypertuneOverride";

/**
 * @deprecated use createSource instead.
 */
export const initHypertune = createSource
/**
 * @deprecated use SourceNode instead.
 */
export type QueryNode = SourceNode;
/**
 * @deprecated use Source instead.
 */
export type Query = Source;
