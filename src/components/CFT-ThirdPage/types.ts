export interface CFTType {
    BuiltInCategory: string;// yes
    ConstraintField: string;// yes
    ContractType: string;// NO
    ID: string;// NO
    KeynoteField: string;// yes
    QuantityField: string;// yes
    ReportType: string;// yes
    Filters: Filter[];// yes
    Phase: string; // yes инпут
    Key: string; // yes селект
    Family: string; // NO инпут
    Type: string; // NO инпут
}

export interface Filter {
    Command: string;
    Comparator?: string;// yes
    Field?: string;// yes
    Value?: string;// yes
    ValueType?: string;// yes
}
