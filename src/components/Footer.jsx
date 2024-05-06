
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 flex items-center">
            <div className="mr-2">
              <FontAwesomeIcon icon={faFacebookF} className="text-white h-8 w-8" />
            </div>
            <div className="mr-2">
              <FontAwesomeIcon icon={faTwitter} className="text-white h-8 w-8" />
            </div>
            <div className="mr-2">
              <FontAwesomeIcon icon={faInstagram} className="text-white h-8 w-8" />
            </div>
            <div>
              <FontAwesomeIcon icon={faLinkedinIn} className="text-white h-8 w-8" />
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Column 2</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere justo ac justo fringilla, nec egestas quam consectetur.</p>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Column 3</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere justo ac justo fringilla, nec egestas quam consectetur.</p>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Column 4</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere justo ac justo fringilla, nec egestas quam consectetur.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
