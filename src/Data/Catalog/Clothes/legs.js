import {
  GiArmoredPants,
  GiRobotLeg,
  GiUnderwearShorts,
  GiShorts,
  GiUnderwear,
  GiTrousers,
  
} from 'react-icons/gi'

export const Legs_CatalogData = {
  id: 'legs_items',
  categoryName: 'Vestimenta Inferior',
  items: [
    {
      id: 'legs-001',
      itemName: 'Calça Blindada',
      icon: <GiArmoredPants />,
    },
    {
      id: 'legs-002',
      itemName: 'Perna Robótica',
      icon: <GiRobotLeg />,
    },
    {
      id: 'legs-003',
      itemName: 'Bermuda Blindada',
      icon: <GiShorts />,
    },
    {
      id: 'legs-004',
      itemName: 'Bermuda Curta',
      icon: <GiUnderwearShorts />,
    },
    {
      id: 'legs-005',
      itemName: 'Cueca',
      icon: <GiUnderwear />,
    },
    {
      id: 'legs-006',
      itemName: 'Protetores',
      icon: <GiTrousers />,
    },
    // {
    //   id: 'legs-007',
    //   itemName: '',
    //   icon: <GiBatMask />,
    // },
  ]
}