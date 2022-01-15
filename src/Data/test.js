import {
  // ROUPAS
  GiGasMask,
  GiAstronautHelmet,
  GiClosedBarbute,
  GiAbdominalArmor,
  GiArmorVest,
  GiConverseShoe,
  GiMonclerJacket,
  GiKevlarVest,
  GiSandal,
  GiShorts,
  GiSpikedShield,
  GiLabradorHead,
  GiBandana,
  GiArmoredPants,
  GiLightBackpack,
  GiDuffelBag,

  // WEAPONS - 1
  GiAk47,
  GiHelmetHeadShot,
  GiGunStock,
  GiSpectreM4,
  GiGunshot,
  GiShotgunRounds,
  GiBoneKnife,
  GiSwordClash,
  GiSwordHilt,
  GiBolterGun,
  GiTensionSnowflake,
  GiTargetDummy,

  // WEAPONS - 2


  // EM MÃOS
  GiHand,

  // MOCHILA


} from "react-icons/gi"

export const TestData = {
  inventory: {
    clothes: {
      head: [
        {
          id: '001',
          name: 'Máscara Espacial',
          icon: <GiClosedBarbute />
        },
        {
          id: '002',
          name: 'Capacete de Astronauta',
          icon: <GiAstronautHelmet />
        },
      ],
      chest: [
        {
          id: '003',
          name: 'Armadura Abdominal',
          icon: <GiAbdominalArmor />
        },
        {
          id: '004',
          name: 'Kevlar',
          icon: <GiKevlarVest />
        },
      ], 
      legs: [
        {
          id: '005',
          name: 'Calças de Combate',
          icon: <GiArmoredPants />
        },
        {
          id: '006',
          name: 'Shorts',
          icon: <GiShorts />
        },
      ],
      foot: [
        {
          id: '007',
          name: 'AllStar',
          icon: <GiConverseShoe />
        },
        {
          id: '008',
          name: 'Sandália',
          icon: <GiSandal />
        },
      ],
      shield: [
        {
          id: '009',
          name: 'Escudo de Espinhos',
          icon: <GiSpikedShield />
        },
        {
          id: '010',
          name: 'Cão de Guarda',
          icon: <GiLabradorHead />
        },
      ],
      backpack: [
        {
          id: '011',
          name: 'Mocila de Escola',
          icon: <GiLightBackpack />
        },
        {
          id: '012',
          name: 'Bolsa de Esportes',
          icon: <GiDuffelBag />
        },
      ]
    },
    weapons: {
      primary: [
        {
          id: '013',
          name: 'Ak47',
          icon: <GiAk47 />,
          extraPrimary: <GiHelmetHeadShot />,
          extraSecondary: <GiGunStock />
        },
        {
          id: '014',
          name: 'Spectre',
          icon: <GiSpectreM4 />,
          extraPrimary: <GiGunshot />,
          extraSecondary: <GiShotgunRounds />
        },
      ],
      secondary: [
        {
          id: '015',
          name: 'Faca de Osso',
          icon: <GiBoneKnife />,
          extraPrimary: <GiSwordClash />,
          extraSecondary: <GiSwordHilt />
        },
        {
          id: '016',
          name: 'Arma Laser',
          icon: <GiBolterGun />,
          extraPrimary: <GiTensionSnowflake />,
          extraSecondary: <GiTargetDummy />
        },
      ],
      hands: {
        stock1: [
          {
            id: '017',
            name: '',
            icon: <GiBandana />,
          }
        ],
        stock2: [
          {
            id: '018',
            name: '',
            icon: <GiBandana />,
          }
        ],
        stock3: [
          {
            id: '019',
            name: '',
            icon: <GiBandana />,
          }
        ],
        stock4: [
          {
            id: '020',
            name: '',
            icon: <GiBandana />,
          }
        ],
        stock5: [
          {
            id: '021',
            name: '',
            icon: <GiBandana />,
          }
        ],
        stock6: [
          {
            id: '022',
            name: '',
            icon: <GiBandana />,
          }
        ],
        stock7: [
          {
            id: '023',
            name: '',
            icon: <GiBandana />,
          }
        ],
      }
    },
    backpack: [
      
    ]
  }
}