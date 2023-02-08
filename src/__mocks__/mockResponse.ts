export const mockJSONData = [{
	book: {
		title: "If Hemingway Wrote JavaScript",
		isbn: "9781593275853",
	},
	stock: {
		quantity: 1,
		price: '£17.79',
	}
}, {
	book: {
		title: 'Grokking Deep Learning',
		isbn: '9781617293702',
	},
	stock: {
		quantity: 2,
		price: '£39.99',
	}
}, {
		book: {
			title: "Tiny Python Projects",
			isbn: "9781617297519",
		},
		stock: {
			quantity: 2,
			price: "£19.99",
		}
	}
];

export const mockXMLResponseString = `<?xml version="1.0" encoding="UTF-8" ?>
<root>
  <row>
    <book>
      <title>If Hemingway Wrote JavaScript</title>
      <isbn>9781593275853</isbn>
    </book>
    <stock>
      <quantity>1</quantity>
      <price>£17.79</price>
    </stock>
  </row>
  <row>
    <book>
      <title>Grokking Deep Learning</title>
      <isbn>9781617293702</isbn>
    </book>
    <stock>
      <quantity>2</quantity>
      <price>£39.99</price>
    </stock>
  </row>
  <row>
    <book>
      <title>Tiny Python Projects</title>
      <isbn>9781617297519</isbn>
    </book>
    <stock>
      <quantity>2</quantity>
      <price>£19.99</price>
    </stock>
  </row>
</root>`;


export const mockParsedResponse = [
	{
		title: 'If Hemingway Wrote JavaScript',
		author: undefined,
		isbn: '9781593275853',
		quantity: 1,
		price: '£17.79'
	},
	{
		title: 'Grokking Deep Learning',
		author: undefined,
		isbn: '9781617293702',
		quantity: 2,
		price: '£39.99'
	},
	{
		title: 'Tiny Python Projects',
		author: undefined,
		isbn: '9781617297519',
		quantity: 2,
		price: '£19.99'
	}
];