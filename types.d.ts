// Branded types for type safety

/** Object pointer - an integer handle to a game object */
export type ObjectPtr<T extends string = string> = number & { __type: T };

/** Critter object (NPCs, player, creatures) */
export type CritterPtr = ObjectPtr<'critter'>;

/** Item object (weapons, armor, ammo, misc items, containers) */
export type ItemPtr = ObjectPtr<'item' | 'container'>;

/** Container object (lockers, chests, bags) - subtype of Item */
export type ContainerPtr = ObjectPtr<'container'>;

/** Scenery object (includes doors) */
export type SceneryPtr = ObjectPtr<'scenery' | 'door'>;

/** Door object - subtype of Scenery */
export type DoorPtr = ObjectPtr<'door'>;

/** Array ID - an integer handle to a sfall array */
export type ArrayID = number & { __brand: 'ArrayID' };
