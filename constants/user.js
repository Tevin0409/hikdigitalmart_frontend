// constants/userRoles.js

export const USER_ROLES = {
  USER: {
    id: 1,
    name: "USER",
  },
  TECHNICIAN: {
    id: 2,
    name: "TECHNICIAN",
  },
  WHOLESALER: {
    id: 3,
    name: "WHOLESALER",
  },
  ADMIN: {
    id: 4,
    name: "ADMIN",
  },
};

// Optional: An array version if you need to loop over the roles
export const USER_ROLES_LIST = Object.values(USER_ROLES);
