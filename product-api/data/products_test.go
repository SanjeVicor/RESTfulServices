package data

import "testing"

func TestChecksValidation(t *testing.T) {
	p := &Product{
		Name:  "nics",
		Price: 1,
		SKU:   "abs-a-a",
	}

	err := p.Validate()

	if err != nil {
		t.Fatal(err)
	}
}
