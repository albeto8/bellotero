export const initialStateMock = {
  loading: false,
  globalInfo: { menu: { items: [] }},
  error: ''
};

export const globalInfoMock = { data: {
  menu: {
    items: [
      { text: 'Testimonial', route: 'page-1' },
      { text: 'Configurator', route: 'page-2' }
    ]
  }
}};

export const configuratorInfoMock = {
  loading: false,
  configuratorInfo: {
    calculator: {
      title: '',
      description: ''
    }
  },
  error: ''
};

export const testimonialInfoMock = {
  loading: false,
  testimonialInfo: {
    slider: {
      title: '',
      reviews: []
    }
  },
  error: ''
};
