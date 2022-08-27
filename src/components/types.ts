export interface Filter {
    Command: string;
    Comparator?: string;
    Field?: string;
    Value?: string;
    ValueType?: string;
}

export interface ContractType {
    BuiltInCategory: string;
    ConstraintField: string;
    ContractType: string;
    ID: string;
    KeynoteField: string;
    QuantityField: string;
    ReportType: string;
    Filters: Filter[];
}
