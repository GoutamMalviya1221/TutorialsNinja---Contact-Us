import ContactUs_po from "../../support/PageObjModel/Project/Contactus";
import ContactUs1_po from "../../support/PageObjModel/Project/Contactus";
import ContactUs2_po from "../../support/PageObjModel/Project/Contactus";
import ContactUs3_po from "../../support/PageObjModel/Project/Contactus";
import ContactUs4_po from "../../support/PageObjModel/Project/Contactus";

describe('', () => {

    const test1 = new ContactUs_po();
    const test2 = new ContactUs1_po();
    const test3 = new ContactUs2_po();
    const test4 = new ContactUs3_po();
    const test5 = new ContactUs4_po();
    //const contactus1_po = new ContactUs();
    it('test1', () => {

        test1.EnterURl();
        test1.ContactUs();

        test2.EnterURl();
        test2.ContactUs1();

        test3.EnterURl();
        test3.ContactUs2();

        test4.EnterURl();
        test4.ContactUs3();

        test5.EnterURl();
        test5.ContactUs4();

        
    });
});