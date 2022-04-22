export interface IEntityBase {
    /**
     * Unique identifier.
     */
    id: string;
}

export interface IEntity extends IEntityBase {
    created: string;
    lastUpdated: string;
}