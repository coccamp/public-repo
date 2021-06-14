// Sanity
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document schemas
import siteSettings from './documents/siteSettings';
import home from './documents/home';
import about from './documents/about';
import productsPage from './documents/productsPage';
import contact from './documents/contact';
import products from './documents/products';
import category from './documents/category';

// Object types
import textContent from './objects/textContent';
import mainImage from './objects/mainImage';
import hero from './objects/hero';

// Translation Types
import trlString from './translation/string';
import trlText from './translation/text';
import trlTextContent from './translation/textContent';
import trlSlug from './translation/slug';

export default createSchema({
  // Schema name
  name: 'site',
  types: schemaTypes.concat([
    // All custom documents and types
    siteSettings,
    home,
    about,
    productsPage,
    contact,
    products,
    category,
    textContent,
    mainImage,
    hero,
    trlString,
    trlText,
    trlTextContent,
    trlSlug,
  ]),
});
