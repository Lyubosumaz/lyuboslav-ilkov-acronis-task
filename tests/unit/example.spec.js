import { mount, createLocalVue } from '@vue/test-utils';
import ElementUI from 'element-ui';
import ExerciseForm from '@/components/ExerciseForm.vue';

describe('raw ExerciseForm', () => {
    it('has data', () => {
        expect(typeof ExerciseForm.data).toBe('function');
    });
});

describe('mounted ExerciseForm', () => {
    const localVue = createLocalVue();
    localVue.use(ElementUI);
    const wrapper = mount(ExerciseForm, { localVue });

    test('is a Vue with ElementUI instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it('renders the correct markup h3', () => {
        expect(wrapper.html()).toContain('<h3>Add new exercise:</h3>');
    });
});

describe('snapshot ExerciseForm', () => {
    const localVue = createLocalVue();
    localVue.use(ElementUI);
    const wrapper = mount(ExerciseForm, { localVue });

    it('renders correctly to match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
